# Creates and configures an Azure Storage account where the website can be hosted.
# Requires the following variables to be defined.
# $storage - The name of the storage account to create.

: ${storage?Set to the name of the storage account to create.}

group=sarah-oak-web

az extension add --name storage-preview

az group create --name $group

az storage account create \
    --https-only \
    --kind StorageV2 \
    --name $storage \
    --resource-group $group \
    --sku Standard_LRS

az storage blob service-properties update \
    --account-name $storage \
    --index-document index.html \
    --static-website
